"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    getHeroes() {
        return this.http.get(this.heroesUrl).toPromise()
            .then(responses => responses.json().data)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An Error ocurred: ', error);
        return Promise.reject(error.message || error);
    }
    getHeroesSlowly() {
        return this.getHeroes();
    }
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    update(hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    create(name) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    delete(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
};
HeroService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
