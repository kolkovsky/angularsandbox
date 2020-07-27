import {Injectable} from '@angular/core';

@Injectable()
export class TestService {

  private testName = 'TEST NAME';
  private serviceId: number = Math.random();

  constructor() {
  }

  public getTestName(): string {
    return this.testName;
  }

  public getServiceId(): number {
    return this.serviceId;
  }
}
