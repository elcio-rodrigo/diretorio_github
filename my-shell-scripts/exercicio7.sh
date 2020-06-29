#!/bin/bash
directory=$1
if [ -d "$directory" ]
then
files=`ls -l $directory | wc -l`
echo "O $directory tem $files arquivo."
else
echo "O argumento $directory não é um diretório!"
fi