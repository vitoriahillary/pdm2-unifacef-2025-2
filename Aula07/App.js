import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';

const PRODUTOS = [
  { id: '1', nome: 'Teclado', preco: '5800.00', categoria: 'Eletrônicos' },
  { id: '2', nome: 'Iphone', preco: '3200.00', categoria: 'Eletrônicos' },
  { id: '3', nome: 'Fone de Ouvido', preco: '750.00', categoria: 'Eletrônicos' },
  { id: '4', nome: 'Blusa', preco: '89.90', categoria: 'Roupas' },
  { id: '5', nome: 'Calça Jeans', preco: '199.90', categoria: 'Roupas' },
  { id: '6', nome: 'Jaqueta', preco: '350.00', categoria: 'Roupas' },
  { id: '7', nome: 'Livro de Receitas', preco: '55.00', categoria: 'Livros e Mídias' },
  { id: '8', nome: 'Ebook de Autoconfiança', preco: '99.00', categoria: 'Livros e Mídias' },
  { id: '9', nome: 'Mouse', preco: '1500.00', categoria: 'Eletrônicos' },
  { id: '10', nome: 'Tênis', preco: '280.00', categoria: 'Roupas' },
];

const agruparProdutos = (produtos) => {
  const grupos = produtos.reduce((acc, produto) => {
    const { categoria } = produto;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(produto);
    return acc;
  }, {});

  
  return Object.keys(grupos).map((title) => ({
    title,
    data: grupos[title],
  }));
};


const ProdutoItem = React.memo(({ nome, preco }) => (
  <View style={produtoStyles.card}>
    <Text style={produtoStyles.nome}>{nome}</Text>
    <Text style={produtoStyles.preco}>R$ {preco}</Text>
  </View>
));

const produtoStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffffba',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#007bffbb',
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  preco: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 4,
  },
});


const SectionHeader = React.memo(({ title }) => (
  <View style={headerStyles.header}>
    <Text style={headerStyles.title}>{title}</Text>
  </View>
));

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default function CatalogoProdutos() {
  const [searchTerm, setSearchTerm] = useState('');
  
 
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 768; 
  

  const dadosAgrupadosFiltrados = useMemo(() => {

    const produtosFiltrados = PRODUTOS.filter((produto) =>
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
   
    return agruparProdutos(produtosFiltrados);
  }, [searchTerm]);


  const renderProduto = useCallback(({ item }) => {
    return <ProdutoItem nome={item.nome} preco={item.preco} />;
  }, []);


  const renderHeader = useCallback(({ section: { title } }) => {
    return <SectionHeader title={title} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Catálogo Interativo de Produtos</Text>
      
      <TextInput
        style={[styles.searchInput, isLargeScreen && styles.searchInputLarge]}
        placeholder="Buscar produtos por nome..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      
      <SectionList
        sections={dadosAgrupadosFiltrados}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderProduto} // Funções memoizadas
        renderSectionHeader={renderHeader} // Funções memoizadas
        
        initialNumToRender={10}
        windowSize={10}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    padding: 15,
    textAlign: 'center',
    backgroundColor: '#eef',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    margin: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },

  searchInputLarge: {
    alignSelf: 'center',
    width: '50%', 
    marginVertical: 20,
  },
});