import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Piatto } from 'src/app/@models/piatto';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-piatto',
  templateUrl: './edit-piatto.component.html',
  styleUrls: ['./edit-piatto.component.scss'],
})
export class EditPiattoComponent {
  piattoId!: string;
  piatto: Partial<Piatto> = {};
  isEditMode = false;

  constructor(
    activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    private router: Router
  ) {
    this.piattoId = activatedRoute.snapshot.params['piattoId'];
    this.isEditMode = !!this.piattoId;
  }

  ngOnInit(): void {
    if (this.isEditMode) {
      this.menuService.getPiatto(this.piattoId).subscribe({
        next: (response) => (this.piatto = response),
      });
    }
  }

  addPiatto() {
    this.menuService.addPiatto(this.piatto).subscribe({
      next: () => this.router.navigateByUrl('/menu'),
      error: () => console.error('Si è verificato un errore'),
    });
  }

  editPiatto() {
    this.menuService.editPiatto(this.piatto).subscribe({
      next: () => this.router.navigateByUrl('/menu'),
      error: () => console.error('Si è verificato un errore'),
    });
  }
}
