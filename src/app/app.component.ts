import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng17-on-netlify';

  private meta = inject(Meta)

  ngOnInit(): void {
    // this.c()
  }

  share() {
    const url = 'https://hris-ssr.netlify.app/'
    this.c()
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');

  }

  c() {
    const image = 'https://images.unsplash.com/photo-1705624980194-6325687bb1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    this.meta.updateTag({ property: 'og:title', content: 'Updated app title' });
    this.meta.updateTag({ property: 'og:image', content: image });

  }
}
