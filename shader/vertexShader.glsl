precision mediump float;

attribute vec3 position;
attribute vec3 normal;

uniform mat4 Model;
uniform mat4 View;
uniform mat4 Projection;
uniform mat4 normalMatrix;

varying vec3 normal_out;

void main() {
    gl_Position = Projection * View * Model * vec4(position, 1.0);
    normal_out = (normalMatrix * vec4(normal, 1.0)).xyz;

}