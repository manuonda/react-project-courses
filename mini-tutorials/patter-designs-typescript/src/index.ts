interface Pokemon {
    id: string,
    attack: number,
    defense: number
}


interface BaseRecord {
    id: string;
    
}


interface Database<T> {
    set(newValue: T): void,
    get(id: string): T
}