import {get} from './http'

export function getMovieList(params){
    let url = "/api/ajax/movieOnInfoList";
    return get({url,params})
}

export function getMoreMovieList(params){
    let url = "/api/ajax/moreComingList";
    return get({url,params})
}

export function getMostExpectlist(params){
    let url = "/api/ajax/mostExpected";
    return get({url,params})
}

export function getComingList(params){
    let url = "/api/ajax/comingList";
    return get({url,params})
}

export function getMoreComingList(params){
    let url = "/api/ajax/moreComingList";
    return get({url,params})
}

export function getSearchList(params){
    let url = '/api/ajax/search';
    return get({url,params})
}

export function getSearchMovieList(params){
    let url = '/api/searchlist/movies';
    return get({url,params})
}

export function getCities(){
    let url = '/cities.json';
    return get({url})
}

export function getCinemasList(){
    let url = '/api/ajax/cinemaList'
    return get({url,params})
}
