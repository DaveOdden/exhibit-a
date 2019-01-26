import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('NavMenu => LoginPage', [

		query(':enter, :leave',

			style( {
				position: 'fixed',
				width: '100%',
				height: '100%'
			} ), { optional: true } ),

		group( [
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(60%)', 'box-shadow': '0 0 60px rgba(0,0,0,.25), -260px 0 0px rgba(0,0,0,.25)' }),
        animate('.3625s ease', style({ opacity: 1, transform: 'translateX(0%)' }) )
			], { optional: true } ),

      query(':leave', [
        style({ transform: 'translateX(0%)', 'z-index': -1 }),
        animate('1s .125s ease', style({ transform: 'translateX(-60%)' }) )
			], { optional: true } ),

		] )

	] ),
	transition('LoginPage => NavMenu', [

		query(':enter, :leave',

			style( {
				position: 'fixed',
				width: '100%',
				height: '100%'
			} ), { optional: true } ),

		group( [
      query(':enter', [
        style({ transform: 'translateX(-30%)' }),
        animate('0.25s ease', style({ transform: 'translateX(0%)' }) )
			], { optional: true } ),

      query(':leave', [
        style({ transform: 'translateX(0%)', 'box-shadow': '0 0 60px rgba(0,0,0,.25), -260px 0 60px rgba(0,0,0,.25)' }),
        animate('0.3625s ease', style({
					transform: 'translateX(100%)',
					opacity: 1,
					'box-shadow': '0 0 60px rgba(0,0,0,0), -260px 0 60px rgba(0,0,0,0)'
				} ) )
			], { optional: true } ),

		] )


  ] )
] );
