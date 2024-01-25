import { ok } from 'node:assert';
import { MyApp } from './my-app';

it('has a MyApp.from() method', () => {
  ok(MyApp.from);
});
