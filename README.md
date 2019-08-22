# ¿Que son hooks?
* Los Hooks son una nueva API de React que nos permite, entre otras características, manejar estados en componentes creados con funciones, osea, no es necesario crear una Clase para un componente con estado.

## Porque el nuevo enfoque:
* Las clases confunden a las personas y a las máquinas (las clases no minifican tan bien como las funciones)
* Concepto de `this`
* Simplicidad (componente de React no deja de ser una funciónes pero se necesitaban crear clases para agregar funcionalidades adicionales)
* Difícil reutilizar la lógica de los componentes
* Código más legible
* Actualizar sólo la parte que toca
* Clases no van a desaparecer(?)

## Basic Hooks

	useState   :Devuelve un valor con estado y una función para actualizarlo.
	useEffect  :Acepta una función que contiene código imperativo, posiblemente código efectivo.
	useContext :Acepta un objeto de contexto y devuelve el valor de contexto actual

##	Additional Hooks

	useReducer
	useCallback
	useMemo
	useRef
	useImperativeHandle
	useLayoutEffect
	useDebugValue

* [API Reference](https://es.reactjs.org/docs/hooks-reference.html)
* [Ejemplos](https://pablomagaz.com/blog/react-hooks-gran-cambio-se-avecina)

# Hook useState

* En lugar de usar el clásico método `this.setState` ahora lo actualizamos usando el método especifico que tendrá como objetivo sólo y exclusivamente actualizar su estado en concreto.

## Como funciona:
* Array destructuring

![Screenshot](/images/array_destructuring.png)

* Permite extraer los elementos de un array y crear variables directamente
* setState <> useState, setState 'fusiona' el estado, useState 'pisa' el estado.

```javascript
	//inicia nuevo estados con hook useState
	const [color, setColor] = useState('red');
	const [width, setWidth] = useState(500);
	const [high, setHigh] = useState(1000);

	...
	//setting estado
	setColor('black');

```

```javascript
	//inicia nuevo estados con this.state
	constructor(props) {
		super(props);
		this.state = {color: 'red', width: 500, high: 1000};
	}

	...
	//setting estado
	this.setState({
		color: 'black'
	});

```
Comparación entre una [clase que usa `this.state`](/src/components/CounterUsingClass/index.js) y una [función que usa `useState()`](/src/components/CounterUsingFunction/index.js)

## Demo

https://elegardo.github.io/react-hooks/

# Hook useContext


> *[Context](https://es.reactjs.org/docs/context.html) provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.*

## Como funciona:

![Screenshot](/images/prop-drilling-v-context.png)

(*) `Prop drilling` propiedades fluyen de arriba hacia abajo en una jerarquía previamente establecida (padre a hijo, de hijo a nieto, de nieto a bisnieto y así sucesivamente).

## Provider:

Es el encargado de proveer el mecanismo de paso de los valores a los componentes hijos en la jerarquía mediante la propiedad value

## Consumer:

Un componente de React que se suscribe a cambios de contexto. Esto le permite suscribirse a un contexto dentro de un componente de función.

## Demo

Proyecto publicado en https://elegardo.github.io/react-hooks/