import FlolService from '../services/flol-service';

export const FLOL_SERVICE = 'FLOL_SERVICE';

const service = {};

export default function* getService(type) {
    if (!service[type]) {
        switch (type) {
            case FLOL_SERVICE:
                service[type] = new FlolService();
                break;
            default:
        }
    }
    return service[type];
}
