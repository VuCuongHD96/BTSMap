'use client';

import { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
    isLoading?: boolean;
}

export function SearchBarView({ onSearch, isLoading = false }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    const handleShowHide = () => {
        setShowForm((prev) => !prev);
    };

    return (
        <div className={styles.searchContainer}>
            {showForm && (
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <InputView searchQuery={searchQuery} setSearchQuery={setSearchQuery} isLoading={isLoading} />
                    <FindButton isLoading={isLoading} onSearch={() => onSearch(searchQuery)} />
                </form>
            )}
            <ShowHideButton onClick={handleShowHide} showForm={showForm} />
        </div>
    );
}

function InputView({ searchQuery, setSearchQuery, isLoading }: { searchQuery: string, setSearchQuery: (value: string) => void, isLoading: boolean }) {
    return (
        <div className={styles.searchInputWrapper}>
            <SearchIcon />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm địa điểm..."
                className={styles.searchInput}
                disabled={isLoading}
            />
        </div>
    )
}

function SearchIcon() {
    return (
        <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function FindButton({ isLoading, onSearch }: { isLoading: boolean, onSearch: () => void }) {
    return (
        <button
            type="button"
            className={styles.searchButton}
            disabled={isLoading}
            onClick={onSearch}
        >
            {isLoading ? 'Đang tìm...' : 'Tìm kiếm'}
        </button>
    )
}

function ShowHideButton({ onClick, showForm }: { onClick: () => void, showForm: boolean }) {
    return (
        <button className={styles.showHideButton} onClick={onClick}>
            {showForm ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </button>
    );
}