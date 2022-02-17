precision mediump float;

uniform vec3 lightDir;

varying vec3 normal_out;

void main() {

    float lightInt = max(dot(normal_out, -lightDir), 0.0);
    gl_FragColor = vec4(0.5 * lightInt, 0.5 * lightInt, 0.5 * lightInt, 1.0);
}