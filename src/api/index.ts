import Base from './base';

class Index extends Base {
    fetch () {
        return this.request({ path: 'test', data: {}, needDelay: true });
    }
}

export default new Index();
