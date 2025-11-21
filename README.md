<img width="1344" height="768" alt="image_p88hnip88hnip88h" src="https://github.com/user-attachments/assets/82b3d388-99f4-4cdd-bf0c-76ec881615ee" />

# ☕ Sistema de Recomendação de Perfis de Café

## 📋 Sobre o Projeto

Sistema de recomendação baseado em aprendizado não-supervisionado que classifica perfis sensoriais de café utilizando algoritmos de clustering. O sistema analisa características sensoriais de cafés e recomenda perfis similares através de uma interface web intuitiva.

### 🎯 Objetivo
Desenvolver um sistema inteligente capaz de identificar e recomendar perfis de café com base em características sensoriais, utilizando técnicas de mineração de dados e machine learning.

## 🏗️ Arquitetura do Sistema

### 🔧 Componentes Principais

#### **Backend (Processamento de Dados)**
- **KNIME Analytics Platform**: Workflow de clusterização
- **Algoritmos Implementados**:
  - k-Means (Modelo Principal)
  - Fuzzy c-Means
  - k-Medoids
  - Agrupamento Hierárquico
- **Exportação PMML**: Modelo serializado para produção

#### **Frontend (Interface)**
- **React/JavaScript**: Interface web responsiva
- **Input de 8 Atributos Sensoriais**:
  - Aroma
  - Flavor
  - Aftertaste
  - Acidity
  - Body
  - Balance
  - Uniformity
  - Sweetness

#### **Lógica de Recomendação**
- **Similaridade por Distância Euclidiana**
- **Normalização Z-score** dos dados de entrada
- **Classificação em Clusters** baseada na menor distância

## 📊 Base de Dados

### 📁 Fonte
**Coffee Quality Database from CQI**
- **Plataforma**: Kaggle
- **Link**: [https://www.kaggle.com/datasets/volpatto/coffee-quality-database-from-cqi](https://www.kaggle.com/datasets/volpatto/coffee-quality-database-from-cqi)
- **Características**: 8 atributos sensoriais de avaliação de café

### 🎛️ Atributos Utilizados

| Atributo | Descrição | Escala |
|----------|-----------|---------|
| Aroma | Intensidade e qualidade aromática | 0-10 |
| Flavor | Sabor e complexidade | 0-10 |
| Aftertaste | Persistência e qualidade do retrogosto | 0-10 |
| Acidity | Acidez e brilho | 0-10 |
| Body | Corpo e textura | 0-10 |
| Balance | Equilíbrio entre características | 0-10 |
| Uniformity | Consistência entre xícaras | 0-10 |
| Sweetness | Doçura natural | 0-10 |

## 📐 Métricas Técnicas

### 🎯 Coeficiente de Silhueta
* **k-Means:** $0.317$
* **Interpretação:** Estrutura de cluster **razoável**. Valores entre $0.25$ e $0.5$ indicam uma segmentação útil.
* **Escala:** $-1$ (pior agrupamento) a $1$ (melhor agrupamento).

### 📏 Distância Euclidiana
* **Fórmula:**
    $$d(p,q) = \sqrt{\sum_{i} (p_i - q_i)^2}$$
* **Utilização:** Cálculo de **similaridade** entre o novo dado inserido pelo usuário e os centróides dos clusters (referências).
* **Implementação:** Usada na comparação com os centróides dos clusters para definir a classificação.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Uso Principal |
| :--- | :--- | :--- |
| **Análise de Dados** | KNIME Analytics Platform | Desenvolvimento e validação do modelo de clusterização. |
| | PMML | Exportação do modelo para uso no front-end. |
| | Python (opcional) | Pré-processamento e exploração de dados. |
| **Desenvolvimento Web** | React.js | Construção da interface de usuário interativa (SPA). |
| | JavaScript (ES6+) | Lógica da aplicação e manipulação do modelo. |
| | HTML5/CSS3 | Estrutura e estilização da interface. |
| | Webpack | Empacotamento de módulos e *assets*. |
| **Visualização** | Chart.js | Criação de gráficos e visualizações dos atributos. |
| | Componentes React personalizados | Visualização específica do perfil sensorial. |

---

## 📈 Resultados e Conclusões

### ✅ Conquistas
* Sistema de recomendação **funcional** e baseado em dados.
* Interface **intuitiva e responsiva** para uso prático.
* Modelo estatisticamente **validado** e pronto para aplicação de negócios.
* Documentação completa do processo.

### 🔍 Insights do Negócio
* O atributo **Aftertaste** é o principal fator diferenciador na segmentação do café.
* A escolha por **dois clusters** oferece uma segmentação comercial simples e útil (Gourmet vs. Padrão).
* O sistema é **aplicável** em torrefações, cafeterias e indústrias de café.

---

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos como parte da disciplina de **Inteligência de Negócios** do IFTM Campus Patrocínio.
