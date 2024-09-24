import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { ClassGridOptionsComponent } from '../class-grid-options/class-grid-options.component';
import { Router } from '@angular/router';
@Component({
  selector: 'lib-class-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './class-grid.component.html',
  styleUrl: './class-grid.component.scss',
})
export class ClassGridComponent {
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
      headerName: 'Class',
      field: 'class',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Section',
      field: 'section',
      headerClass: ' text-center',
      // cellClass: 'text-blue-500 text-center',
    },
    {
      headerName: 'classTeacher',
      field: 'classTeacher',
      headerClass: ' text-center',
      // cellClass: 'text-blue-500 text-center',
    },
    {
      headerName: 'Total Students',
      field: 'totalStudents',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Subjects',
      field: 'subjects',
      // cellClass: 'text-blue-500 text-center',
      headerClass: 'text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: ClassGridOptionsComponent,
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  rowData = [
    {
      class: '1',
      section: 'A',
      classTeacher: 'Mrs. Meena',
      totalStudents: 30,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Hindi',
      ],
    },
    {
      class: '2',
      section: 'B',
      classTeacher: 'Mr. Rajesh',
      totalStudents: 28,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Hindi',
      ],
    },
    {
      class: '3',
      section: 'A',
      classTeacher: 'Ms. Kavita',
      totalStudents: 32,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Hindi',
      ],
    },
    {
      class: '4',
      section: 'B',
      classTeacher: 'Mr. Suresh',
      totalStudents: 25,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Hindi',
      ],
    },
    {
      class: '5',
      section: 'A',
      classTeacher: 'Mrs. Anjali',
      totalStudents: 30,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Hindi',
      ],
    },
    {
      class: '6',
      section: 'C',
      classTeacher: 'Mr. Rohan',
      totalStudents: 35,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Computer',
      ],
    },
    {
      class: '7',
      section: 'A',
      classTeacher: 'Ms. Neha',
      totalStudents: 31,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Computer',
      ],
    },
    {
      class: '8',
      section: 'B',
      classTeacher: 'Mr. Amit',
      totalStudents: 29,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'Social Studies',
        'Computer',
      ],
    },
    {
      class: '9',
      section: 'A',
      classTeacher: 'Mr. Rakesh',
      totalStudents: 33,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'History',
        'Geography',
        'Computer',
      ],
    },
    {
      class: '10',
      section: 'B',
      classTeacher: 'Mrs. Sunita',
      totalStudents: 34,
      subjects: [
        'Mathematics',
        'English',
        'Science',
        'History',
        'Geography',
        'Computer',
      ],
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
