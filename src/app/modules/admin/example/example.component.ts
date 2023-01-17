import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AdminService } from 'app/core/auth/admin/admin.service';
import { FontesInterface } from './interface/fontes.interface';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
    fontes: Array<FontesInterface> = [];
    displayedColumns: Array<string> = ['ID', 'Proprietário', 'Status', 'Tipo fonte', 'Ações'];
    constructor(private adminService: AdminService) { }

    ngOnInit(): void {
        this.getFontes();
    }
    getFontes(): void {
        this.adminService.getFontes().subscribe(
            (fontes: Array<FontesInterface>) => {
                console.log('fontes', fontes);
                this.fontes = fontes;
            }
        );
    }
}
