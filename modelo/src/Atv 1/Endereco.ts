export class Endereco{

    private _rua: string;
    private _numero: number;
    private _cidade: string;

	constructor(rua: string, numero: number, cidade: string, estado: string) {
		this._rua = rua;
		this._numero = numero;
		this._cidade = cidade;
		this._estado = estado;
	}

    /**
     * Getter rua
     * @return {string}
     */
	public get rua(): string {
		return this._rua;
	}

    /**
     * Setter rua
     * @param {string} value
     */
	public set rua(value: string) {
		this._rua = value;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Getter cidade
     * @return {string}
     */
	public get cidade(): string {
		return this._cidade;
	}

    /**
     * Setter cidade
     * @param {string} value
     */
	public set cidade(value: string) {
		this._cidade = value;
	}

    /**
     * Getter estado
     * @return {string}
     */
	public get estado(): string {
		return this._estado;
	}

    /**
     * Setter estado
     * @param {string} value
     */
	public set estado(value: string) {
		this._estado = value;
	}
    private _estado: string;


}