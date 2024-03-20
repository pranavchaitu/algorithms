function isValidSudoku(sudoku) {
  const boxSize = 3;

  // Check rows and columns for duplicates
  for (let row = 0; row < sudoku.length; row++) {
    const rowFrequencies = new Set(); // Use Set for efficient duplicate checks
    for (let col = 0; col < sudoku[0].length; col++) {
      const value = sudoku[row][col];
      if (value > 0 && rowFrequencies.has(value)) {
        return false; // Duplicate found in row
      }
      rowFrequencies.add(value);
    }
  }

  for (let col = 0; col < sudoku[0].length; col++) {
    const colFrequencies = new Set();
    for (let row = 0; row < sudoku.length; row++) {
      const value = sudoku[row][col];
      if (value > 0 && colFrequencies.has(value)) {
        return false; // Duplicate found in column
      }
      colFrequencies.add(value);
    }
  }

  // Check subgrids for duplicates
  for (let boxRowStart = 0; boxRowStart < sudoku.length; boxRowStart += boxSize) {
    for (let boxColStart = 0; boxColStart < sudoku[0].length; boxColStart += boxSize) {
      const subgridFrequencies = new Set();
      for (let row = boxRowStart; row < boxRowStart + boxSize; row++) {
        for (let col = boxColStart; col < boxColStart + boxSize; col++) {
          const value = sudoku[row][col];
          if (value > 0 && subgridFrequencies.has(value)) {
            return false; // Duplicate found in subgrid
          }
          subgridFrequencies.add(value);
        }
      }
    }
  }

  return true; // No duplicates found
}

