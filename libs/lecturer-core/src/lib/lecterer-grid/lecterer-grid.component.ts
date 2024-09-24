import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectererGridOptionsComponent } from '../lecterer-grid-options/lecterer-grid-options.component';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'lib-lecterer-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './lecterer-grid.component.html',
  styleUrl: './lecterer-grid.component.scss',
})
export class LectererGridComponent {
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
      headerName: 'Employee Id',
      field: 'employeeId',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Email',
      field: 'email',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Department',
      field: 'department',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Subject',
      field: 'subject',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Experience',
      field: 'experience',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Classes Handled',
      field: 'classesHandled',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Started Date',
      valueGetter: () => new Date().toLocaleDateString(),
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: LectererGridOptionsComponent,
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  rowData = [
    {
      name: 'Mr. Sharma',
      subject: 'Mathematics',
      employeeId: 'EMP001',
      contactNumber: '9876543210',
      email: 'sharma.math@school.com',
      department: 'Mathematics',
      experience: '10 years',
      classesHandled: ['5', '6', '7'],
    },
    {
      name: 'Ms. Lata',
      subject: 'Science',
      employeeId: 'EMP002',
      contactNumber: '9876543211',
      email: 'lata.sci@school.com',
      department: 'Science',
      experience: '8 years',
      classesHandled: ['6', '7', '8'],
    },
    {
      name: 'Mr. Verma',
      subject: 'English',
      employeeId: 'EMP003',
      contactNumber: '9876543212',
      email: 'verma.eng@school.com',
      department: 'English',
      experience: '12 years',
      classesHandled: ['7', '8', '9'],
    },
    {
      name: 'Mr. Saxena',
      subject: 'History',
      employeeId: 'EMP004',
      contactNumber: '9876543213',
      email: 'saxena.hist@school.com',
      department: 'Social Studies',
      experience: '15 years',
      classesHandled: ['8', '9', '10'],
    },
    {
      name: 'Ms. Priya',
      subject: 'Computer Science',
      employeeId: 'EMP005',
      contactNumber: '9876543214',
      email: 'priya.cs@school.com',
      department: 'Computer Science',
      experience: '5 years',
      classesHandled: ['9', '10'],
    },
    {
      name: 'Mr. Raj',
      subject: 'Physical Education',
      employeeId: 'EMP006',
      contactNumber: '9876543215',
      email: 'raj.pe@school.com',
      department: 'Physical Education',
      experience: '7 years',
      classesHandled: ['8', '9', '10'],
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
