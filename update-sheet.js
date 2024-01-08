async function updateSheet(reactVersion, typescriptVersion, repositoryName) {
  console.log(reactVersion, typescriptVersion, repositoryName);
}

// GitHub Actionsから渡されたReactとTypeScriptのバージョン、リポジトリ名を取得
const reactVersion = process.argv[2];
const typescriptVersion = process.argv[3];
const repositoryName = process.argv[4];

// スプレッドシートを更新
updateSheet(reactVersion, typescriptVersion, repositoryName).catch(
  console.error,
);
