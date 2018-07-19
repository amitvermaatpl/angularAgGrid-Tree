import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Injectable()
export class PortfolioTreeService {
    

    constructor() { }

      getPendingLiveReq(): TreeviewItem[] {
        const ecbPortfolio = new TreeviewItem({
            text: 'ECB Portfolio Tree', value: 1, collapsed: true, children: [
                {
                    text: 'Investment Portfolios', value: 91, collapsed: true, children: [
                        {
                            text: 'Foreign Reserves', value: 911, collapsed: true, children: [
                                { text: 'Foreign Currencies', value: 9111 },
                                { text: 'Gold', value: 9112 },
                                { text: 'Special Drawing Rights (SDR)', value: 9113 }
                            ]
                        }, {
                            text: 'Own Funds', value: 912, collapsed: true
                        }, {
                            text: 'Pension Funds', value: 912, collapsed: true
                        }]
                },
                {
                    text: 'Monitory Policy Portfolios', value: 92, collapsed: true, children: [
                        { text: 'Asset-Backed Securities Purchase Programme (ABSPP)', value: 921 },
                        { text: 'Public Sector Purchase Programme (PSPP)', value: 922 },
                        { text: 'Corporate Sector Purchase Programme (CSPP)', value: 921 },
                        {
                            text: 'Covered Bond Purchase Programme (CBPP)', value: 922, collapsed: true, children: [
                                { text: 'CBPP1', value: 9117 },
                                { text: 'CBPP2', value: 9118 },
                                { text: 'CBPP3', value: 9119 }
                            ]
                        }
                    ]
                }
            ]
        });
        return [ecbPortfolio];
    }

    getDataForReqAssessment(): TreeviewItem[] {
        const ecbPortfolio = new TreeviewItem(
            {
                text: 'MP', value: 1, collapsed: true, children: [
                    {
                        text: 'CSPP', value: 91, collapsed: true, children: [
                            {
                                text: 'cspp-1a', value: 911, collapsed: true, children: [
                                    { text: 'cspp-1a-xyz', value: 9111 },
                                    { text: 'cspp-1a-abc', value: 9112 }
                                ]
                            }]
                    },
                    {
                        text: 'PSPP', value: 92
                    },
                    {
                        text: 'ABSPP', value: 92
                    },
                    {
                        text: 'CBPP3', value: 92
                    }
                ]
            }
        );
        const ip = new TreeviewItem({
            text: 'IP', value: 2
        });

        return [ecbPortfolio, ip];
    }


}
