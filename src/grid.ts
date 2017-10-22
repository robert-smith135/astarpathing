import Cell from './cell' 

export default class Grid  {

    private grid: any;
    private columns: number = 5;
    private rows: number = 5;
    private openSet: any = [];
    private closedSet: any [] = [];
    private start: number[][];
    private end: number[][];

    private noSolutionFlag: boolean = false;

    constructor(cols: number, rows: number) {
        this.columns = cols;
        this.rows = rows;
        this.buildGrid();
        this.buildCells();
        this.calculateStartAndEnd();
        this.openSet.push(this.start);
    }

    private calculateStartAndEnd() {
        this.start = this.grid[0][0];
        this.end = this.grid[this.columns-1][this.rows-1];
    }

    private buildGrid(): void {
        for (let i = 0; i < this.columns; i++) {
            this.grid[i] = new Array(this.rows);
        }
    }

    private buildCells(): any {
        this.grid.forEach((column: any) => {
            column.forEach((row: any) => {
                this.grid[column][row] = new Cell(column, row, this.columns, this.rows, this.columns);
            })
        })
    }

    public noSolution(): void {
        if (this.openSet.length > 0) {
            this.noSolutionFlag = false;
        } else {
            this.noSolutionFlag = true;
        }
    }

}