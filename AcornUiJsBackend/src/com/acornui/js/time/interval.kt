/*
 * Copyright 2015 Nicholas Bilyk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.acornui.js.time

external fun setTimeout(callback: ()->Unit, milliseconds:Int):Int
external fun <T> setTimeout(callback: (T)->Unit, milliseconds:Int, arg0: T):Int
external fun <T, U> setTimeout(callback: (T, U)->Unit, milliseconds:Int, arg0: T, arg1: U):Int
external fun <T, U, V> setTimeout(callback: (T, U, V)->Unit, milliseconds:Int, arg0: T, arg1: U, arg2: V):Int
external fun clearTimeout(timeoutId:Int)
external fun setInterval(callback: ()->Unit, milliseconds:Int):Int
external fun <T> setInterval(callback: (T)->Unit, milliseconds:Int, arg0: T):Int
external fun <T, U> setInterval(callback: (T, U)->Unit, milliseconds:Int, arg0: T, arg1: U):Int
external fun <T, U, V> setInterval(callback: (T, U, V)->Unit, milliseconds:Int, arg0: T, arg1: U, arg2: V):Int
external fun clearInterval(intervalId:Int)