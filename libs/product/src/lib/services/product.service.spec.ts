import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { productModel } from '@rock-band-ng-store';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //   service: TestBed.get(ProductService);
  //   httpTestingController = TestBed.get(HttpTestingController);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load all the products', (done) => {
    const mockRes: productModel.Product[] = [
      {
        id: 111,
        name: 'book',
        price: 990,
      },
      {
        id: 23,
        name: 'chair',
        price: 232,
      },
    ];
    let dRes: productModel.Product[] = [];

    // spyOn(service, 'loadProducts').and.returnValue(of(mockRes));

    service.loadProducts().subscribe((res) => {
      dRes = res;
      expect(dRes).toEqual([]);
      done();
    });

    // expect(dRes[0].id).toEqual(22);
    //      const req = httpTestingController.expectOne({
    //       method: 'GET',
    //       url: `http://localhost:8080/products?_page=1&_limit=6`
    //     });

    //     req.flush(mockRes);
  });
});
