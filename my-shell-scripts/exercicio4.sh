#!/bin/bash
file="/home/elciorodrigo/DiretorioTeste/teste1.sh"
if [ -e "$file" ]
then
echo "O caminho $file está habilitado"

fi
if [ -w "$file" ]
then
echo "Você tem permissão para editar $file"
else
echo "Você NÃO foi autorizado a editar $file"
fi
