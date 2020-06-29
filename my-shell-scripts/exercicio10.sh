#!/bin/bash

dia=$(date +%F)
for file in `ls *.png`
do
mv $file ${dia}-${file}
done