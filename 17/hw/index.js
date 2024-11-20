const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg',
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg',
  },
  {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image:
      'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg',
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image:
      'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png',
  },
];

class Transport {
  constructor(price, brand) {
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.type;
    document.body.appendChild(this.element);

    this.element = document.createElement('div');
    this.element.innerHTML = this.brand;
    document.body.appendChild(this.element);
  }
  getPrice() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.price;
    document.body.appendChild(this.element);
  }
  getImage() {
    this.element = document.createElement('img');
    this.element.setAttribute('src', this.image);
    document.body.appendChild(this.element);
  }
}

class Car extends Transport {
  constructor(price, brand, doors, image) {
    super(price, brand);
    this.type = 'car';
    this.doors = doors;
    this.image = image;
  }
  getDoorsCount() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.doors;
    document.body.appendChild(this.element);
  }
}

class Bike extends Transport {
  constructor(price, brand, maxSpeed, image) {
    super(price, brand);
    this.type = 'bike';
    this.maxSpeed = maxSpeed;
    this.image = image;
  }
  getMaxSpeed() {
    this.element = document.createElement('div');
    this.element.innerHTML = this.maxSpeed;
    document.body.appendChild(this.element);
  }
}

data.forEach(function (item) {
  if (item.type == 'car') {
    let transport = new Car(item.price, item.brand, item.doors, item.image);
    transport.getInfo();
    transport.getPrice();
    transport.getDoorsCount();
    transport.getImage();
  } else {
    let transport = new Bike(item.price, item.brand, item.maxSpeed, item.image);
    transport.getInfo();
    transport.getPrice();
    transport.getMaxSpeed();
    transport.getImage();
  }
});
