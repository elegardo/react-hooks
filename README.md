# ¿Que son hooks?
* Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una function.

## Basic Hooks

	useState
	useEffect
	useContextm

##	Additional Hooks

	useReducer
	useCallback
	useMemo
	useRef
	useImperativeHandle
	useLayoutEffect
	useDebugValue

# Hook useState

* En lugar de usar el clásico método this.setState ahora lo actualizamos usando el método especifico que tendrá como objetivo sólo y exclusivamente actualizar su estado en concreto.

```javascript
	//inicia nuevo estado
	const [state, setState] = useState(initialState);
```

```javascript
	//setting estado
	setState(newState);
```

## Porque el nuevo enfoque:
* Las clases confunden a las personas y a las máquinas (las clases no minifican tan bien como las funciones)
* Concepto de 'this'
* Simplicidad (componente de React no deja de ser una funciónes pero se necesitaban crear clases para agregar funcionalidades adicionales)
* Difícil reutilizar la lógica de los componentes
* Código más legible
* Actualizar sólo la parte que toca


[Ejemplo refactorizacion una clase](https://pbs.twimg.com/media/DquJO7rVsAAcYYr.jpg:large)


Clases no van a desaparecer

## Como funciona:
* Array destructuring
* Permite extraer los elementos de un array y crear variables directamente
* useState <> setState, setState fuciona el estado, setState pisa el estado.

## Soluciones:

* High Order Componentes: funciones que envuelven componentes de React, lógica interna la maneja una funcion a la cual se pasa como aparmetro el compoente


[Ejemplo HOC](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)

