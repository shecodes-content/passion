(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"passion","version":"1.0.0","description":"on real programmers","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/passion.git"},"brain":{"provides":["real-programmers"],"track":"blue","bundler":{"name":"bpm-bundle","version":"1.1.0"}},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/passion/issues"},"homepage":"https://github.com/shecodes-content/passion"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"passion_passion\" class=\"anchor\" href=\"#passion_passion\"><span class=\"header-link\"></span></a>Passion</h1><p>There are people that will tell you that there’s no point in learning to program when you are an adult. If you did not grow up with a home computer in the 80s, they say, spending three days without sleeping, drinking 50 cans of coke and hacking away on your C64 to write a game in 6502 assembler, then you’ll never be a <em>real programmer</em>. Programming is a passion, you either have it or you don’t, they continue. “If your sole purpose of learning a programming language is to earn money, you’ll fail!”, usually concludes this statement.</p>\n<p>Well, that is bullshit. Most car drivers never drove a Formula One racing car or a motorbike. Many do not even have any desire to ever do so, because frankly, they think it’s stupid to risk their health or even life. They simply use cars to transport themselves or goods from one point to another. They learned to drive a car without ever having driven a racing car. And there’s nothing wrong with it.</p>\n<p>Times have changed, that <em>real programmer</em> model is outdated. Collaboration is the key to building awesome software today. Communication skills and empathy along with creativity, problem solving skills and mastering the craft of software development are the critical ingredients.</p>\n<p>You will learn to code, if you are determined and motivated and if you enjoy learning in the first place, because for a software developer learning never ends. And while you grow your knowledge and skills, passion will come to you almost certainly. Try to refrain from spending too many full nights coding in a row though!</p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
