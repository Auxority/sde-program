const world = 'world';

function hello(name: string): string {
  return `Hello ${name}! `;
}

// tslint:disable-next-line: no-console
console.log(hello(world));