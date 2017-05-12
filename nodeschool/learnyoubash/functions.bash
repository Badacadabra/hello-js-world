#!/bin/bash

min="$1"
max="$2"

fn() {
  # [[ "$1" -lt "$2" ]] || return
  if [[ "$1" -ge "$2" ]]; then
    exit 0
  fi

  space="$3"

  if [[ $(( $1 % 2 )) -eq 0 ]]; then
    i=0

    for (( i = 0; i < "$space"; i++ )); do
      echo -n " "
    done
    echo "$1"

    space=$(( space + 1 ))
  fi

  fn $(( $1 + 1 )) "$2" "$space"
}

main() {
  echo "${FUNCNAME[0]}"
  fn "$1" "$2" 1
}

main "$min" "$max"
