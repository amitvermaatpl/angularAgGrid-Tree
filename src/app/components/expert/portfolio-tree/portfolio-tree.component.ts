import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { NgZone } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddChildComponent } from './../add-child/add-child.component';
import { TreePortfolioService } from '../../../shared/services/tree-portfolio.service';
import { EditPortfolioComponent } from './../edit-portfolio/edit-portfolio.component';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import { HttpClient } from '@angular/common/http';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
   //   $event.preventDefault();
   //   alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-portfolio-tree',
  templateUrl: './portfolio-tree.component.html',
  styleUrls: ['./portfolio-tree.component.css']
})
export class PortfolioTreeComponent implements OnInit {
  linkactive: string = 'portfoliotree';
  configurations: boolean = true;
  childPortfolios: any[] = [];
  nodes: any;
  @ViewChild('tree') tree;
  asyncChildren = new Array(4).fill(null).map((item, n) => ({
    name: 'async child2.' + n,
    subTitle: 'async child ' + n,
    hasChildren: n < 5
  }));
  customTemplateStringOptions: ITreeOptions = {
    // displayField: 'subTitle',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    actionMapping,
    nodeHeight: 23,

    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    useVirtualScroll: true,
    animateExpand: true
  };

  deactivatePortfolioForm: FormGroup;

  constructor(private dialogService: DialogService, public fbAddModule: FormBuilder,
    private portfolioTreeService: TreePortfolioService, private http: HttpClient) {
    this.deactivatePortfolioForm = this.fbAddModule.group(
      {
        portfolioName: ['', [Validators.required]],
        id: ['', [Validators.required]],
        parentId: ['', [Validators.required]],
        description: ['', [Validators.required]],
        active: ['', [Validators.required]],
        rarId: ['', [Validators.required]],
        validFrom: ['', [Validators.required]],
        validTo: ['', [Validators.required]]
      });

  }

  ngOnInit() {
    /* this.http.get('./assets/mockjson/portfolio_tree_data.json').subscribe(data => {
      setTimeout(() => {
        this.nodes = data;
      }, 1);
    }); */

    this.portfolioTreeService.fetchRootPortfolio().subscribe(
      rootPortfolio => {
        console.log('rootPortfolioL', rootPortfolio);
      setTimeout(() => {
        console.log('rootPortfolioL', rootPortfolio);
        const usersJson: any = Array.of(rootPortfolio);
        //this.nodes = '['+ rootPortfolio +']';
        this.nodes = usersJson;
      }, 1);
      }
    );

  }

  addchild() {
    const disposable = this.dialogService.addDialog(AddChildComponent, {

    }).subscribe((isConfirmed) => { 
      this.ngOnInit();
    });
  }
  editPortfolio() {
    const disposable = this.dialogService.addDialog(EditPortfolioComponent, {

    }).subscribe((isConfirmed) => { });
  }

  deactivatePortfolio() {
    const addChildJson = this.deactivatePortfolioForm.value;

    console.log('=====DEACTIVATE Profile======> ', addChildJson);
    const parentId = this.deactivatePortfolioForm.value.parentId;

    this.portfolioTreeService.deactivatePortfolio(parentId).subscribe();
  }

  getChildren(node: TreeNode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.asyncChildren.map((c) => {
        return Object.assign({}, c, {
          hasChildren: node.level < 5
        });
      })), 2000);
    });
  }
  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text: string, tree: any) {
    tree.treeModel.filterNodes(text);
  }

  activateSubSub(tree: any) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  onEvent(event: any) {
    console.log(event);
  }
  onInitialized(tree: any) {
    console.log('tree:', tree);
//    tree.treeModel.expandAll();
    // tree.treeModel.getNodeById('11').setActiveAndVisible();
  }

  go($event: any) {
    $event.stopPropagation();
    this.addchild();
  }

  activeNodes(treeModel: TreeModel) {
    console.log(treeModel.activeNodes);
  }

}
