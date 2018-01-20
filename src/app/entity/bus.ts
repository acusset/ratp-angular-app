import {Transport} from './transport';

export class Bus extends Transport {

  constructor(code: number, name: string, directions: string, id: number) {
    super(code, name, directions, id, 'bus');
  }
}
