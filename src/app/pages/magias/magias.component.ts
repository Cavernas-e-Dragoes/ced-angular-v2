import { Component, OnInit } from '@angular/core';
import { MagicService } from '../../services/magic.service';
import { Magic } from '../../models/magic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magias',
  templateUrl: './magias.component.html',
  styleUrls: ['./magias.component.css']
})
export class MagiasComponent implements OnInit {

  magias!: { count: number, results: Magic[] };
  loading: boolean = true;
  error: string = '';

  // Filtros
  filters = {
    level: [] as number[],  // Agora é um array de números
    school: '',
    class: ''
  };

  // Opções para os filtros
  levels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  schools: string[] = ['Evocação', 'Conjuração', 'Necromancia', 'Transmutação', 'Adivinhação', 'Encantamento', 'Ilusão', 'Abjuração'];
  classes: string[] = ['Mago', 'Feiticeiro', 'Druida', 'Clérigo', 'Paladino', 'Patrulheiro', 'Bardo', 'Bruxo'];

  currentPage: number = 0;
  pageSize: number = 10; // Exibe 10 resultados por página, mas você pode ajustar esse valor

  Math = Math;
  
  constructor(private magicService: MagicService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadMagics();
  }

  loadMagics(): void {
    this.loading = true;
    this.magicService.getMagics().subscribe({
      next: (data) => {
        this.magias = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar as magias.';
        this.loading = false;
      }
    });
  }

  // Método para aplicar o filtro ao clicar em um ícone
  applyFilters(): void {
    this.loading = true;
  
    // Níveis selecionados
    const levels = this.filters.level.length > 0 ? this.filters.level : undefined;
    const { school, class: className } = this.filters;
  
    this.magicService
      .getFilteredMagics(levels, school, className, this.currentPage, this.pageSize)
      .subscribe({
        next: (data) => {
          if (data.count === 0) {
            this.magias = { count: 0, results: [] };
            this.error = 'Nenhuma magia encontrada com os filtros aplicados.';
          } else {
            this.magias = data;
            this.error = ''; // Limpa qualquer mensagem de erro
          }
          this.loading = false;
        },
        error: () => {
          this.error = 'Erro ao carregar as magias com os filtros aplicados.';
          this.loading = false;
        },
      });
  }
  
  changePage(newPage: number): void {
    if (newPage >= 0 && newPage < Math.ceil(this.magias.count / this.pageSize)) {
      this.currentPage = newPage;
      this.applyFilters(); // Atualiza os dados ao mudar de página
    }
  }
  
  resetPagination(): void {
    this.currentPage = 0; // Reseta para a primeira página ao aplicar novos filtros
    this.applyFilters();
  }
  
  toggleFilter(filterType: keyof typeof this.filters, value: string | number): void {
    if (filterType === 'level') {
      const level = value as number;
      if (this.filters.level.includes(level)) {
        this.filters.level = this.filters.level.filter(l => l !== level);
      } else {
        this.filters.level.push(level);
      }
    } else {
      this.filters[filterType] = this.filters[filterType] === value.toString() ? '' : value.toString();
    }
    this.applyFilters();
  }
  
  goToDetail(index: string): void {
    this.router.navigate(['/magias', index]);
  }
}
