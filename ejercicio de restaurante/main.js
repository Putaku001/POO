class Menu {
    constructor() {
        this.items = {
            'Hamburguesas': 5.00,
            'Tacos de Birria': 7.00,
            'Nachos': 4.00,
            'Bebidas de industria la constancia': 1.50
        };
    }

    mostrarMenu() {
        const table = document.getElementById('menu');
        for (const item in this.items) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = item;
            cell2.textContent = `$${this.items[item].toFixed(2)}`;
        }
    }
}

class Pedido {
    constructor(nombreCliente) {
        this.nombreCliente = nombreCliente;
        this.items = {};
        this.estado = 'En cocina';
    }

    agregarItem(item, cantidad) {
        if (item in this.items) {
            this.items[item] += cantidad;
        } else {
            this.items[item] = cantidad;
        }
    }

    mostrarPedido() {
        const listaPedido = document.getElementById('pedido');
        listaPedido.innerHTML = '';

        for (const item in this.items) {
            const listItem = document.createElement('li');
            listItem.textContent = `${this.items[item]} ${item}`;
            listaPedido.appendChild(listItem);
        }
    }

    calcularTotal(menu) {
        let total = 0;
        for (const item in this.items) {
            total += menu.items[item] * this.items[item];
        }
        return total;
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class PedidoEnCocina extends Pedido {
    constructor(nombreCliente) {
        super(nombreCliente);
    }

    mostrarEnCocina() {
        const table = document.getElementById('enCocina');
        for (const item in this.items) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            cell1.textContent = this.nombreCliente;
            cell2.textContent = item;
            cell3.textContent = this.items[item];
            cell4.textContent = this.estado;
        }
    }
}

const menu = new Menu();
menu.mostrarMenu();

let pedidoActual;

function agregarPedido() {
    const cliente = document.getElementById('cliente').value;
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);

    if (!cliente || !producto || isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    if (!pedidoActual || cliente !== pedidoActual.nombreCliente) {
        if (pedidoActual && Object.keys(pedidoActual.items).length > 0) {
            alert('Solo se permite un pedido por cliente.');
            return;
        }
        pedidoActual = new Pedido(cliente);
    }

    pedidoActual.agregarItem(producto, cantidad);
    mostrarPedido();
}

function mostrarPedido() {
    pedidoActual.mostrarPedido();
}

function finalizarPedido() {
    if (!pedidoActual || Object.keys(pedidoActual.items).length === 0) {
        alert('Realice al menos un pedido antes de finalizar.');
        return;
    }

    const pedidoEnCocina = new PedidoEnCocina(pedidoActual.nombreCliente);
    pedidoEnCocina.items = { ...pedidoActual.items };
    pedidoEnCocina.mostrarEnCocina();

    pedidoActual.cambiarEstado('Listo');
    mostrarEstadoPedido();

    pedidoActual = null;
    mostrarPedido();
}

function mostrarEstadoPedido() {
    const estadoPedido = document.getElementById('estadoPedido');
    const listItem = document.createElement('li');
    listItem.textContent = `Pedido de ${pedidoActual.nombreCliente} - Estado: ${pedidoActual.estado}`;
    estadoPedido.appendChild(listItem);
}


