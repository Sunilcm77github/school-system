import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { StudentGridOptionsComponent } from '../student-grid-options/student-grid-options.component';

@Component({
  selector: 'lib-student-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule, FormsModule],
  templateUrl: './student-grid.component.html',
  styleUrl: './student-grid.component.scss',
})
export class StudentGridComponent {
  constructor(private readonly router: Router) {}
  columnDefs: ColDef[] = [
    {
      headerName: 'SL.NO',
      valueGetter: 'node.rowIndex + 1',
      headerClass: ' text-center',
      // cellClass: 'text-blue-500 text-center',
      maxWidth: 110,
    },
    {
      headerName: 'Name',
      field: 'name',
      headerClass: ' text-center',
      // cellClass: 'text-blue-500 text-center',
    },
    {
      headerName: 'Class',
      field: 'class',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Roll No',
      field: 'rollNo',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Parents Name',
      field: 'parentsName',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Mobile Number',
      field: 'mobileNumber',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Admission Date',
      valueGetter: () => new Date().toLocaleDateString(),
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: StudentGridOptionsComponent,
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  rowData = [
    {
      name: 'Manoj',
      class: '5',
      rollNo: 32,
      parentsName: 'Darnesh',
      mobileNumber: '9875462532',
    },
    {
      name: 'Harish',
      class: '4',
      rollNo: 1,
      parentsName: 'Mahadev',
      mobileNumber: '7475462534',
    },
    {
      name: 'Kiran',
      class: '7',
      rollNo: 12,
      parentsName: 'Parmesh',
      mobileNumber: '8875462538',
    },
  ];
  defultcoulmndef = {
    flex: 1,
    sortable: true,
    filter: true,
  };

  onEdit(): void {
    this.router.navigate(['/details'], {});
  }
}
