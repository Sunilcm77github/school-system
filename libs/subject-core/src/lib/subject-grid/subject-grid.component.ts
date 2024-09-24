import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectGridOptionsComponent } from '../subject-grid-options/subject-grid-options.component';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'lib-subject-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './subject-grid.component.html',
  styleUrl: './subject-grid.component.scss',
})
export class SubjectGridComponent {
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
      headerName: 'Subject Name',
      field: 'subjectName',
      headerClass: ' text-center',
      // cellClass: 'text-blue-500 text-center',
    },
    {
      headerName: 'Subject Code',
      field: 'subjectCode',
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
      headerName: 'Lecturer',
      field: 'teacher',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Pass Marks',
      field: 'passMarks',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Max Marks',
      field: 'maxMarks',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Elective',
      field: 'elective',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: SubjectGridOptionsComponent,
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  rowData = [
    {
      subjectName: 'Mathematics',
      subjectCode: 'MTH101',
      teacher: 'Mr. Sharma',
      maxMarks: 100,
      passMarks: 35,
      class: '5',
      elective: false,
    },
    {
      subjectName: 'Science',
      subjectCode: 'SCI202',
      teacher: 'Ms. Lata',
      maxMarks: 100,
      passMarks: 35,
      class: '6',
      elective: false,
    },
    {
      subjectName: 'English',
      subjectCode: 'ENG303',
      teacher: 'Mr. Verma',
      maxMarks: 100,
      passMarks: 35,
      class: '7',
      elective: false,
    },
    {
      subjectName: 'History',
      subjectCode: 'HIS404',
      teacher: 'Mr. Saxena',
      maxMarks: 100,
      passMarks: 35,
      class: '8',
      elective: false,
    },
    {
      subjectName: 'Computer Science',
      subjectCode: 'CSC505',
      teacher: 'Ms. Priya',
      maxMarks: 100,
      passMarks: 40,
      class: '9',
      elective: true,
    },
    {
      subjectName: 'Physical Education',
      subjectCode: 'PE606',
      teacher: 'Mr. Raj',
      maxMarks: 50,
      passMarks: 20,
      class: '10',
      elective: true,
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
