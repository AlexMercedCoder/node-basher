echo "Cloning Repo"
git clone --depth 1 $1 $2
echo "Changing Directory"
cd $2
echo "Removing Remote"
git remote rm origin
echo "Installing Dependencies"
npm install