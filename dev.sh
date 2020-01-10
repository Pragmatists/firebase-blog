#!/bin/bash
npm --prefix functions run build -- --watch &
npm --prefix webapp start &
firebase serve &
wait
