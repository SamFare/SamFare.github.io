echo "########################"
echo "Begining build procedure"
echo "########################"

npm run test

if [ $? -ne 0 ]; then
  exit 1
fi

npm run build

if [ $? -ne 0 ]; then
  exit 1
fi


echo "########################"
echo "Begining deploy procedure"
echo "########################"

echo "########################"
echo "Begining DEPLOY procedure"
echo "########################"

tmpFile="~/website-io$RANDOM"
echo "creating temp file at $tmpFile"

eval "mkdir ${tmpFile}"
eval "mkdir ${tmpFile}/assets/"
eval "mkdir ${tmpFile}/build/"

echo "$tmpFile and subdirs made"

eval "cp ./assets/* ${tmpFile}/assets"
eval "cp ./dist/build/* ${tmpFile}/build"
eval "cp index.css ${tmpFile}"
eval "cp index.html ${tmpFile}/newpage.html"
eval "cp coming-soon.html ${tmpFile}/index.html"

git checkout gh-pages


if [ $? -ne 0 ]; then
  exit 1
fi

rm -rf ./*

mkdir assets
mkdir build

eval "cp ${tmpFile}/assets/* ./assets/"
eval "cp ${tmpFile}/build/* ./build/ "
eval "cp ${tmpFile}/index.css ."
eval "cp ${tmpFile}/index.html ."
eval "cp ${tmpFile}/newpage.html ."

echo "########################"
echo "AWOOOOGA WOOOOGA"
echo "########################"

echo "########################"
echo "DEPLOYING TO LIVE TYPE 'deploy' TO DEPLOY"
echo "type anything else to exit"
echo "########################"


echo "########################"
echo "AWOOOOGA WOOOOGA"
echo "########################"


read string

if [ $string = deploy ]; then
  echo "publishing"
  git add .
  git commit -am "AUTOMATED DEPLOY"
  git push

  if [ $? -ne 0 ]; then
    echo "stuff failed - your bad probs. reverting to original state"
  fi
fi
  echo "reverting to master"
  git checkout .
  git checkout master







