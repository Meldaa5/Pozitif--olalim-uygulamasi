import React from 'react'
import { Text } from 'react-native'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

export default function Compon() {
  return(function topla() {
    var sayi1 = parseFloat(document.getElementById("text1").value);
    var sayi2 = parseFloat(document.getElementById("text2").value);
    var sonuc = sayi1 + sayi2;
    document.getElementById("cevap").innerHTML = "Sonuç: " + sonuc;
  },
  function çıkar(a,b) {
    return a-b
  },
  function çarp(a,b) {
    return a*b
  },
  function böl(a,b) {
    return a/b
  }
  )
}
