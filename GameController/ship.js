class Ship {
  constructor(name, size, color) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.positions = [];
    this.hits = [];
    this.orientation = null; // 'horizontal' or 'vertical'
  }

  addPosition(position) {
    this.positions.push(position);
    if (this.positions.length === this.size) {
      if (!this.validatePositions()) {
        this.positions.pop(); // Remove the invalid position
        throw new Error(
          "Invalid ship placement: positions must be consecutive and aligned horizontally or vertically.",
        );
      }
    }
  }

  validatePositions() {
    if (this.positions.length !== this.size) return false;

    // Extract rows and columns
    const rows = this.positions.map((pos) => pos[0]);
    const cols = this.positions.map((pos) => pos[1]);

    // Check if all positions are in the same row
    const isHorizontal = rows.every((row) => row === rows[0]);

    // Check if all positions are in the same column
    const isVertical = cols.every((col) => col === cols[0]);

    if (isHorizontal) {
      // Ensure columns are consecutive
      const sortedCols = [...cols].sort((a, b) => a - b);
      return sortedCols.every(
        (col, index) => index === 0 || col === sortedCols[index - 1] + 1,
      );
    } else if (isVertical) {
      // Ensure rows are consecutive
      const sortedRows = [...rows].sort((a, b) => a - b);
      return sortedRows.every(
        (row, index) => index === 0 || row === sortedRows[index - 1] + 1,
      );
    } else {
      return false; // Not aligned
    }
  }

  isSunk() {
    return this.hits.length === this.size;
  }

  addHit(pos) {
    this.hits.push(pos);
  }
}

module.exports = Ship;
