export class Marker {

    public lat: number;
    public lng: number;

    public title = 'Sin Titulo';
    public description = 'Sin descripción';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
     }
}