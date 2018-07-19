import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app-led-expert',
  templateUrl: './led-expert.component.html',
  styleUrls: ['./led-expert.component.css']
})
export class LedExpertComponent implements OnInit {

  usersroles: boolean = true;
  linkactive: string = 'ledexpert';

  constructor() { }

    nodes1 = [
    {
      id: 47,
      name: 'Definitions',
      children:
      [
        {
          id: 1,
          name: 'Add data collection'
        },
        {
          id: 2,
          name: 'Metadata',
          children: [
            { id: 3, name: 'View' },
            { id: 4, name: 'Edit' }
          ],
          isExpanded: true
        },
        {
          id: 5,
          name: 'Module',
          children: [
            { id: 6, name: 'View' },
            { id: 7, name: 'Add' },
            { id: 8, name: 'Edit' },
            { id: 9, name: 'Upload Template'},
            { id: 10, name: 'Create New Version'}
          ],
          isExpanded: true
        },
        {
          id: 11,
          name: 'Data Points',
          children: [
            { id: 12, name: 'View' },
            { id: 13, name: 'Edit' },
            { id: 14, name: 'Upload Template'},
          ],
          isExpanded: true
        },
        {
          id: 15,
          name: 'Entities',
          children: [
            { id: 16, name: 'View' },
            { id: 17, name: 'Add' },
            { id: 18, name: 'Edit' },
            { id: 19, name: 'Upload'},
            { id: 20, name: 'Assign Attributes'},
            { id: 21, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 22,
          name: 'Custom Attribute',
          children: [
            { id: 23, name: 'View' },
            { id: 24, name: 'Add' },
            { id: 25, name: 'Edit' },
            { id: 26, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 27,
          name: 'Entity Groups',
          children: [
            { id: 28, name: 'View' },
            { id: 29, name: 'Add' },
            { id: 30, name: 'Edit' },
            { id: 31, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 36,
          name: 'Cycle',
          children: [
            { id: 37, name: 'View' },
            { id: 38, name: 'Add' },
            { id: 39, name: 'Edit' },
            { id: 40, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 41,
          name: 'Obligation per Group',
          children: [
            { id: 42, name: 'View' },
            { id: 43, name: 'Add' },
            { id: 44, name: 'Edit' },
            { id: 45, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 46,
          name: 'Obligation per Entity',
        },
      ],
      isExpanded: true
    }
  ];
  nodes2 = [
    {
      id: 1,
      name: 'User Roles and Permissions',
      children:  [
        {
          id: 47,
          name: 'User Management',
          children: [
            { id: 48, name: 'View' },
            { id: 49, name: 'Add' },
            { id: 50, name: 'Edit' },
            { id: 51, name: 'Delete'}
          ],
          isExpanded: true
        },
        {
          id: 52,
          name: 'Roles Management',
          children: [
            { id: 53, name: 'View' },
            { id: 54, name: 'Edit' }
          ],
          isExpanded: true
        }
      ],
      isExpanded: true
    }
  ];

  options = {
    useCheckbox: true
  };


  ngOnInit() {
  }

}
