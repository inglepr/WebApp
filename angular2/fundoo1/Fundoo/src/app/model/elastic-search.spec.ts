import { ElasticSearch } from './elastic-search';

describe('ElasticSearch', () => {
  it('should create an instance', () => {
    expect(new ElasticSearch()).toBeTruthy();
  });
});
