#!/bin/bash
directory=$1
extension=$2
dia=$(date +%F)
cd $directory
for file in `ls *.$extension`
directoryecho "Renomeando $file para ${dia}-${file}"
mv $file ${dia}-${file}
done