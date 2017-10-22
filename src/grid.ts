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

    private buildGrid(): void {
        this.grid = new Array();
        for (var i = 0; i < this.columns; i++) {
            this.grid[i] = new Array(this.rows);
        }
    }

    private buildCells(): any {
        this.grid.forEach((column: any, columnIndex: number) => {
            column.forEach((row: any, rowIndex: number) => {
                this.grid[column][row] = new Cell(columnIndex, rowIndex, this.columns, this.rows, this.columns);
            })
        })
    }

    private calculateStartAndEnd() {
        this.start = this.grid[0][0];
        this.end = this.grid[this.columns-1][this.rows-1];
    }

    public noSolution(): void {
        if (this.openSet.length > 0) {
            this.noSolutionFlag = false;
        } else {
            this.noSolutionFlag = true;
        }
    }

    public showOpenSet(): void {
        this.openSet.forEach((column: any) => {
            column.forEach((row: any) => {
                this.grid[column][row].show(color(66, 83, 244));
            })
        })
    }

    public showClosedSet(): void {
        this.closedSet.forEach((column: any) => {
            column.forEach((row: any) => {
                this.grid[column][row].show(color(244, 66, 66));
            })
        })
    }

}