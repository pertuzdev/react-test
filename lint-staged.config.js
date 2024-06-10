module.exports = {
  '**/*.+(ts|tsx)': files => {
    //Building the array to validate each typescript file
    return files.map(
      file =>
        `npx tsc-files --noEmit --incremental false -p tsconfig.json ${file}`,
    );
  }, //Adding prettier for all this files
  '**/*.+(js|jsx|ts|tsx|css|less|scss|md|json)': ['prettier --write'],
};
