!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var o in t)
                    i.d(
                        n,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 0));
})([
    function (t, e) {
        let i,
            n,
            o,
            s,
            r,
            c,
            l,
            h,
            u,
            a,
            f,
            p,
            d,
            b,
            w,
            y,
            m,
            v,
            x,
            g,
            P,
            C,
            E,
            M,
            T,
            z,
            B,
            S,
            W,
            O,
            A = [],
            j = 1,
            _ = {};
        const L = Math.random,
            H = Math.floor,
            I = Math.round,
            q = Math.min,
            D = Math.max,
            F = 2 * Math.PI,
            R = Math.sin,
            X = Math.cos,
            Y = Math.hypot;
        function $(t, e) {
            return void 0 === e && ((e = t), (t = 0)), H(t + (e - t) * L());
        }
        function G(t) {
            let e, i;
            for (let n = t.length - 1; n >= 1; --n)
                (e = $(0, n + 1)), (i = t[n]), (t[n] = t[e]), (t[e] = i);
            return t;
        }
        function J(t) {
            return t[$(t.length)];
        }
        function K(t, e) {
            return [t[0] + e[0], t[1] + e[1]];
        }
        function N(t, e, i) {
            return [(1 - i) * t[0] + i * e[0], (1 - i) * t[1] + i * e[1]];
        }
        function Q(t, e) {
            return Y(t[0] - e[0], t[1] - e[1]);
        }
        function U(t, e) {
            (this.kx = t), (this.ky = e), (this.p = [l + t * y, h + e * y]);
        }
        function V(t, e) {
            return (
                w[e] || (w[e] = []), w[e][t] || (w[e][t] = new U(t, e)), w[e][t]
            );
        }
        function Z(t, e) {
            (this.kx = t),
                (this.ky = e),
                (this.vertices = [
                    V(t, e),
                    V(t + 1, e),
                    V(t + 1, e + 1),
                    V(t, e + 1),
                ]),
                (this.trans = []),
                (this.blocked = !1);
        }
        function tt(t, e, i) {
            let n,
                o,
                { kx: s, ky: r } = t;
            switch ((i ? (t.trans[e] = i) : (i = t.trans[e]), d)) {
                case 0:
                    (n = f - 1 - s),
                        (o = p - 1 - r),
                        (b[o][n].trans[2 ^ e] = i);
                    break;
                case 1:
                    (n = f - 1 - s), (b[r][n].trans[(4 - e) & 3] = i);
                    break;
                case 2:
                    (o = p - 1 - r), (b[o][s].trans[(6 - e) & 3] = i);
                    break;
                case 3:
                    (n = f - 1 - s),
                        (o = p - 1 - r),
                        (b[o][n].trans[2 ^ e] = i),
                        (b[r][n].trans[(4 - e) & 3] = i),
                        (b[o][s].trans[(6 - e) & 3] = i);
            }
        }
        function et() {
            let t, e, i, n, o;
            b[0].forEach((t) => t.setBlocked()),
                b.forEach((t) => {
                    t[0].setBlocked(), t[f - 1].setBlocked();
                }),
                b[p - 1].forEach((t) => t.setBlocked()),
                (function () {
                    let t,
                        e,
                        i,
                        n,
                        o = (f - 3) / 2,
                        s = (p - 3) / 2,
                        r = q(o, s),
                        c = s > o;
                    switch (J([0, 3, 3])) {
                        case 0:
                            return;
                        case 3:
                            (i = r), (n = 1);
                    }
                    for (let o = 1; o <= r && i > 0; ++o) {
                        for (let n = 1; n <= i; ++n)
                            ([t, e] = c ? [o, n] : [n, o]),
                                b[e][t].setBlocked(),
                                b[p - 1 - e][t].setBlocked(),
                                b[e][f - 1 - t].setBlocked(),
                                b[p - 1 - e][f - 1 - t].setBlocked();
                        i -= n;
                    }
                })();
            for (let s = 1; s < p - 1; ++s)
                for (let r = 1; r < f - 1; ++r) {
                    i = b[s][r];
                    for (let c = 0; c < 4; ++c)
                        i.trans[c] ||
                            ((t = r + [0, 1, 0, -1][c]),
                            (e = s + [-1, 0, 1, 0][c]),
                            (n = b[e][t]),
                            (o = n.trans[2 ^ c]),
                            (i.trans[c] = o || J(["b", "x"]))),
                            tt(i, c, !1);
                }
            for (let t = 1; t < p - 1; ++t)
                for (let e = 1; e < f - 1; ++e) (i = b[t][e]), i.removebbbb();
        }
        function it() {
            return (
                (r = window.innerWidth),
                (c = window.innerHeight),
                (i.style.left = (window.innerWidth - r) / 2 + "px"),
                (i.style.top = (window.innerHeight - c) / 2 + "px"),
                (i.width = r),
                (i.height = c),
                (o.style.left = (window.innerWidth - r) / 2 + "px"),
                (o.style.top = (window.innerHeight - c) / 2 + "px"),
                (o.width = r),
                (o.height = c),
                !(r < 10) &&
                    ((n.lineCap = "round"),
                    (s.lineCap = "round"),
                    (d = J([0, 1, 1, 3, 3, 3, 4])),
                    (f = 1 + 2 * $(2, 5)),
                    (p = 0 == d || 3 == d ? f : 1 + 2 * $(2, 5)),
                    (y = I(r / (f + 1))),
                    y * (p + 1) > c && (y = I(c / (p + 1))),
                    (f += 2),
                    (p += 2),
                    (l = (r - y * f) / 2),
                    (h = (c - y * p) / 2),
                    (u = 0.2 * R(0.4) * y),
                    (a = 0.2 * X(0.4) * y),
                    (v = 0.15 * y),
                    (x = 0.2 * y),
                    (m = 0.2 * y),
                    (g = 0.05 * y),
                    (P = 1.5 * 0.05 * y),
                    (M = "#222"),
                    (w = []),
                    (b = new Array(p)
                        .fill(0)
                        .map((t, e) =>
                            new Array(f).fill(0).map((t, i) => new Z(i, e))
                        )),
                    et(),
                    (function () {
                        for (let t = 1; t <= p - 2; ++t)
                            for (let e = 1; e <= f - 2; ++e)
                                b[t][e].setPoints();
                    })(),
                    (function () {
                        let t, e, i, n, o, s;
                        (T = []),
                            b.forEach((t) =>
                                t.forEach((t) => (t.loops = [[], [], [], []]))
                            );
                        let r = 0;
                        for (e = 1; e < p - 1; ++e)
                            for (i = b[e], t = 1; t < f - 1; ++t)
                                if (((n = i[t]), !n.blocked))
                                    for (o = 0; o < 4; ++o)
                                        for (s = 0; s < 2; ++s)
                                            void 0 === n.loops[o][s] &&
                                                (c(n, o, s), ++r);
                        function c(t, e, i) {
                            let n,
                                o = t,
                                s = e,
                                c = i,
                                l = new PolyCubic([t.points[e].middle]);
                            T[r] = l;
                            do {
                                (t.loops[e][i] = r),
                                    0 == i
                                        ? ((n = (e + 1) % 4),
                                          l.addCubic([
                                              t.points[e].cw,
                                              t.points[n].ccw,
                                              t.points[n].middle,
                                          ]))
                                        : ((n = (e + 3) % 4),
                                          l.addCubic([
                                              t.points[e].ccw,
                                              t.points[n].cw,
                                              t.points[n].middle,
                                          ])),
                                    (t.loops[n][1 - i] = r),
                                    "b" == t.trans[n]
                                        ? (e = n)
                                        : ((t =
                                              b[t.ky + [-1, 0, 1, 0][n]][
                                                  t.kx + [0, 1, 0, -1][n]
                                              ]),
                                          (e = (n + 2) % 4),
                                          (i = 1 - i));
                            } while (t != o || e != s || i != c);
                        }
                    })(),
                    !0)
            );
        }
        function nt() {
            A.push({ event: "click" }),
                (_.x = event.clientX),
                (_.y = event.clientY);
        }
        function ot() {
            A.push({ event: "resize" });
        }
        function st(t) {
            (_.x = t.clientX), (_.y = t.clientY), (_.moved = !0);
        }
        function rt() {
            let t;
            for (
                G(T),
                    z = new Array(2).fill(0).map(() => []),
                    B = new Array(2).fill(0),
                    S = [],
                    O = [],
                    W = new Array(2).fill(0).map(() => [0]),
                    T.forEach((t) => {
                        $(2) && t.inverse(),
                            t.rndOffset(L()),
                            t.structure(),
                            t.atomize(2),
                            t.prepareWhere(0, 0.5);
                    }),
                    t = T.length - 1;
                t >= 0;
                --t
            ) {
                let e = W.reduce(
                    (t, e, i) =>
                        e[e.length - 1] < W[t][W[t].length - 1] ? i : t,
                    0
                );
                z[e].push(T[t]),
                    W[e].push(W[e][W[e].length - 1] + T[t].tout + $(100, 200));
            }
            (n.fillStyle = M),
                n.fillRect(0, 0, r, c),
                (function (t) {
                    let e, i;
                    for (let n = 1; n < p - 1; ++n) {
                        e = b[n];
                        for (let n = 1; n < f - 1; ++n)
                            (i = e[n]), i.drawDot(t);
                    }
                })(n);
        }
        (Z.prototype.setPoints = function () {
            let t, e;
            (this.points = []),
                this.trans.forEach((i, n) => {
                    switch (
                        ((this.points[n] = t = {}),
                        (e = N(
                            this.vertices[n].p,
                            this.vertices[(n + 1) % 4].p,
                            0.5
                        )),
                        this.trans[n])
                    ) {
                        case "b":
                            (t.middle = K(
                                e,
                                [
                                    [0, m],
                                    [-m, 0],
                                    [0, -m],
                                    [m, 0],
                                ][n]
                            )),
                                "b" == this.trans[(n + 3) % 4]
                                    ? (t.ccw = K(
                                          t.middle,
                                          [
                                              [-v, 0],
                                              [0, -v],
                                              [v, 0],
                                              [0, v],
                                          ][n]
                                      ))
                                    : (t.ccw = K(
                                          t.middle,
                                          [
                                              [-x, 0],
                                              [0, -x],
                                              [x, 0],
                                              [0, x],
                                          ][n]
                                      )),
                                "b" == this.trans[(n + 1) % 4]
                                    ? (t.cw = K(
                                          t.middle,
                                          [
                                              [v, 0],
                                              [0, v],
                                              [-v, 0],
                                              [0, -v],
                                          ][n]
                                      ))
                                    : (t.cw = K(
                                          t.middle,
                                          [
                                              [x, 0],
                                              [0, x],
                                              [-x, 0],
                                              [0, -x],
                                          ][n]
                                      ));
                            break;
                        case "x":
                            (t.middle = e),
                                (t.ccw = K(
                                    e,
                                    [
                                        [-u, a],
                                        [-a, -u],
                                        [u, -a],
                                        [a, u],
                                    ][n]
                                )),
                                (t.cw = K(
                                    e,
                                    [
                                        [u, a],
                                        [-a, u],
                                        [-u, -a],
                                        [a, -u],
                                    ][n]
                                ));
                    }
                });
        }),
            (Z.prototype.draw = function () {
                let t, e, i;
                for (
                    ctx.beginPath(),
                        t = this.vertices[0].p,
                        ctx.moveTo(t[0], t[1]),
                        t = this.vertices[1].p,
                        ctx.lineTo(t[0], t[1]),
                        t = this.vertices[2].p,
                        ctx.lineTo(t[0], t[1]),
                        t = this.vertices[3].p,
                        ctx.lineTo(t[0], t[1]),
                        ctx.closePath(),
                        ctx.strokeStyle = "#fff",
                        ctx.lineWidth = 0.5,
                        ctx.stroke(),
                        e = 0;
                    e < 4;
                    ++e
                )
                    (i = this.points[e]),
                        ctx.beginPath(),
                        ctx.moveTo(i.ccw[0], i.ccw[1]),
                        ctx.lineTo(i.middle[0], i.middle[1]),
                        ctx.lineTo(i.cw[0], i.cw[1]),
                        (ctx.strokeStyle = "#0f0"),
                        (ctx.lineWidth = P),
                        ctx.stroke();
            }),
            (Z.prototype.drawDot = function (t) {
                this.blocked ||
                    (t.beginPath(),
                    t.arc(
                        l + (this.kx + 0.5) * y,
                        h + (this.ky + 0.5) * y,
                        g,
                        0,
                        F
                    ),
                    (t.fillStyle = E),
                    t.fill());
            }),
            (Z.prototype.setBlocked = function () {
                (this.trans = ["b", "b", "b", "b"]), (this.blocked = !0);
            }),
            (Z.prototype.removebbbb = function () {
                let t, e, i;
                if (this.kx == (f - 1) / 2 && this.ky == (p - 1) / 2) return;
                if (this.blocked) return;
                if (this.trans.some((t) => "b" != t)) return;
                let n = (function (t) {
                    let e = [];
                    for (let i = 0; i < t; ++i) e[i] = i;
                    return G(e);
                })(4);
                for (let o = 0; o < 4; ++o)
                    if (
                        ((t = n[o]),
                        "b" == this.trans[t] &&
                            ((e = this.kx + [0, 1, 0, -1][t]),
                            (i = this.ky + [-1, 0, 1, 0][t]),
                            !b[i][e].blocked))
                    )
                        return tt(this, t, "x"), void tt(b[i][e], 2 ^ t, "x");
            });
        let ct = (() => {
            let t,
                e = 0,
                o = 0;
            return function (l) {
                let h, u;
                for (e += (l - o) * j, o = l; (h = A.shift()); )
                    switch (h.event) {
                        case "init":
                        case "click":
                        case "resize":
                            t = 1;
                    }
                switch (t) {
                    case 1:
                        it() && ++t;
                        break;
                    case 2:
                        (u = null == _.y ? c / 3 : _.y),
                            (C = (420 * u) / c - 30),
                            (C = D(0, q(360, C))),
                            (E = `hsl(${C},100%,50%)`),
                            rt(),
                            (e = 0),
                            (i.style.zIndex = -1),
                            ++t;
                        break;
                    case 3:
                        (u = null == _.y ? c / 3 : _.y),
                            (C = (420 * u) / c - 30),
                            (C = D(0, q(360, C))),
                            (E = `hsl(${C},100%,50%)`),
                            (j = null == _.x ? 1 : 0.1 + (10 / r) * _.x),
                            s.clearRect(0, 0, r, c);
                        let o = !0;
                        if (
                            (z.forEach((t, e) => {
                                void 0 === S[e]
                                    ? B[e] < t.length &&
                                      ((o = !1),
                                      (S[e] = B[e]++),
                                      (O[e] = W[e][S[e]]))
                                    : (o = !1);
                            }),
                            o)
                        ) {
                            ++t, (i.style.zIndex = 99);
                            break;
                        }
                        s.beginPath(),
                            S.forEach((t, i) => {
                                void 0 !== t &&
                                    (z[i][t].drawTo(e - O[i], s),
                                    z[i][t].finished &&
                                        (n.beginPath(),
                                        z[i][t].draw(n),
                                        (n.strokeStyle = E),
                                        (n.lineWidth = P),
                                        n.stroke(),
                                        (S[i] = void 0)));
                            }),
                            (s.strokeStyle = E),
                            (s.lineWidth = P),
                            s.stroke();
                }
                window.requestAnimationFrame(ct);
            };
        })();
        window.addEventListener("load", function () {
            (i = document.createElement("canvas")),
                (i.style.position = "absolute"),
                document.body.appendChild(i),
                (n = i.getContext("2d")),
                (o = document.createElement("canvas")),
                (o.style.position = "absolute"),
                document.body.appendChild(o),
                (s = o.getContext("2d")),
                o.setAttribute(
                    "title",
                    "Click for new pattern \nMove for hue and speed"
                ),
                window.addEventListener("click", nt),
                window.addEventListener("resize", ot),
                window.addEventListener("mousemove", st),
                A.push({ event: "init" }),
                window.requestAnimationFrame(ct);
        }),
            (function () {
                function t(t) {
                    this.points = t;
                }
                (t.prototype.split = function (e) {
                    let i = N(this.points[0], this.points[1], e),
                        n = N(this.points[1], this.points[2], e),
                        o = N(this.points[2], this.points[3], e),
                        s = N(i, n, e),
                        r = N(n, o, e),
                        c = N(s, r, e);
                    return [
                        new t([this.points[0], i, s, c]),
                        new t([c, r, o, this.points[3]]),
                    ];
                }),
                    (t.prototype.draw = function (t, e) {
                        let i, n, o, s;
                        ([i, o, s, n] = this.points),
                            e && t.moveTo(i[0], i[1]),
                            t.bezierCurveTo(o[0], o[1], s[0], s[1], n[0], n[1]);
                    }),
                    (t.prototype.atomize = function (t) {
                        let e = [this.points[0]],
                            i = [0],
                            n = [0];
                        !(function o(s, r, c) {
                            let [l, h, u, a] = s.points,
                                f = Q(l, a),
                                p = Q(l, h) + Q(h, u) + Q(u, a);
                            if (f + t > p)
                                return e.push(a), i.push(f), void n.push(c);
                            let [d, b] = s.split(0.5),
                                w = (r + c) / 2;
                            o(d, r, w), o(b, w, c);
                        })(this, 0, 1);
                        for (let t = 1; t < i.length; ++t) i[t] += i[t - 1];
                        (this.atomPoints = e),
                            (this.dist = i),
                            (this.alphas = n),
                            (this.nb = e.length),
                            (this.length = i[e.length - 1]);
                    }),
                    (t.prototype.prepareWhere = function (t, e) {
                        let i;
                        this.atomized || this.atomize(1),
                            (this.tin = t),
                            (this.times = i = []),
                            this.atomPoints.forEach(
                                (n, o) => (i[o] = this.dist[o] / e + t)
                            ),
                            (this.tout = i[this.nb - 1]);
                    }),
                    (t.prototype.where = function (t) {
                        if (t > this.tout) return !1;
                        if (t <= this.tin) return this.atomPoints[0];
                        for (k = 1; k < this.nb && !(t < this.times[k]); ++k);
                        let e = this.atomPoints[k - 1],
                            i = this.atomPoints[k],
                            n = t - this.times[k - 1],
                            o = this.times[k] - t,
                            s = o + n;
                        return [
                            (e[0] * o + i[0] * n) / s,
                            (e[1] * o + i[1] * n) / s,
                        ];
                    }),
                    (t.prototype.drawTo = function (t, e, i) {
                        let n, o;
                        if (t > this.tout) return this.draw(e, i), !1;
                        if (t <= this.tin) return i;
                        for (n = 1; n < this.nb && !(t < this.times[n]); ++n);
                        let s = this.alphas[n - 1],
                            r = this.alphas[n],
                            c = t - this.times[n - 1],
                            l = this.times[n] - t;
                        o = (s * l + r * c) / (c + l);
                        let [h, u] = this.split(o);
                        return h.draw(e, i), !1;
                    }),
                    (window.CubicBezier = t);
            })(),
            (function () {
                function t(t) {
                    (this.points = []), t && (this.points = t);
                }
                (t.prototype.addCubic = function (t) {
                    this.points.length || (this.points[0] = t[0]);
                    let e = 3 == t.length ? 0 : 1,
                        i = this.points.length;
                    (this.points[i++] = t[e++]),
                        (this.points[i++] = t[e++]),
                        (this.points[i++] = t[e++]);
                }),
                    (t.prototype.inverse = function () {
                        let t = this.points;
                        for (let e = 0, i = t.length - 1; e < i; ++e, --i)
                            [t[e], t[i]] = [t[i], t[e]];
                    }),
                    (t.prototype.rndOffset = function (t) {
                        let e = this.points,
                            i = (e.length - 1) / 3,
                            n = Math.floor(t * i);
                        if ((i == n && --n, 0 == n)) return;
                        (n *= 3), e.splice(-1, 1);
                        let o = e.slice(n, e.length);
                        (this.points = o.concat(e.slice(0, n))),
                            this.points.push(this.points[0]);
                    }),
                    (t.prototype.structure = function () {
                        let t = [],
                            e = this.points;
                        for (let i = 0; i < e.length - 1; i += 3)
                            t.push(
                                new CubicBezier([
                                    e[i],
                                    e[i + 1],
                                    e[i + 2],
                                    e[i + 3],
                                ])
                            );
                        this.cubics = t;
                    }),
                    (t.prototype.atomize = function (t) {
                        let e = 0;
                        this.cubics.forEach((i) => {
                            i.atomize(t), (e += i.length);
                        }),
                            (this.length = e);
                    }),
                    (t.prototype.prepareWhere = function (t, e) {
                        this.cubics.forEach((i) => {
                            i.prepareWhere(t, e), (t = i.tout);
                        }),
                            (this.tout = t),
                            (this.kCubic = 0),
                            (this.finished = !1);
                    }),
                    (t.prototype.where = function (t) {
                        for (; this.kCubic < this.cubics.length; ) {
                            if (t <= this.cubics[this.kCubic].tout)
                                return this.cubics[this.kCubic].where(t);
                            ++this.kCubic;
                        }
                        return !1;
                    }),
                    (t.prototype.draw = function (t) {
                        let e = !0;
                        this.cubics.forEach((i) => {
                            i.draw(t, e), (e = !1);
                        });
                    }),
                    (t.prototype.drawTo = function (t, e) {
                        let i = !0;
                        this.cubics.forEach((n) => {
                            i = n.drawTo(t, e, i);
                        }),
                            t >= this.tout && (this.finished = !0);
                    }),
                    (window.PolyCubic = t);
            })();
    },
]);
