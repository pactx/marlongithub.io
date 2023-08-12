import csv
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Função para adicionar uma nova despesa


def adicionar_despesa(valor, categoria, data, descricao):
    with open('gastos.csv', 'a', newline='') as arquivo:
        escritor = csv.writer(arquivo)
        escritor.writerow([data, categoria, descricao, valor])

# Função para calcular estatísticas


def calcular_estatisticas():
    total_por_categoria = {}
    total_geral = 0

    with open('gastos.csv', 'r') as arquivo:
        leitor = csv.reader(arquivo)
        next(leitor)  # Pula o cabeçalho

        for linha in leitor:
            data, categoria, _, valor = linha
            valor = float(valor)
            total_geral += valor

            if categoria in total_por_categoria:
                total_por_categoria[categoria] += valor
            else:
                total_por_categoria[categoria] = valor

    return total_geral, total_por_categoria

# Rota principal


@app.route('/')
def index():
    total_geral, total_por_categoria = calcular_estatisticas()
    return render_template('index.html', total_geral=total_geral, total_por_categoria=total_por_categoria)

# Rota para adicionar despesa


@app.route('/adicionar', methods=['POST'])
def adicionar():
    valor = float(request.form['valor'])
    categoria = request.form['categoria']
    data = request.form['data']
    descricao = request.form['descricao']

    adicionar_despesa(valor, categoria, data, descricao)

    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
