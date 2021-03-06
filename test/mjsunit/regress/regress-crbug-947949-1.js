// Copyright 2019 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax --verify-heap

function foo(s) { return s + '0123456789012'; }
foo('a');
foo('\u1000');
%OptimizeFunctionOnNextCall(foo);
foo('');
